import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import * as svg2pdf from 'svg2pdf.js';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-pdf-generate',
  templateUrl: './pdf-generate.component.html',
  styleUrls: ['./pdf-generate.component.css']
})
export class PdfGenerateComponent implements OnInit {
  @ViewChild('test', {static: false}) content: ElementRef;
  items = ['001', '002', '001', '003', '001'];

  relaciones = [
    {
      id: '001',
      terminalDestino: 'Bogotá',
      fecha: '29/03/2020',
      parcels: [
      '0090282982',
      '8917298729',
      '9712987298',
      '9839872398',
      '9839872398',
      '9839872398',
      '9839872398',
      '9839872398',
      '9839872398',
      '9839872398',
      '9839872398',
      '9839872398',
      '9839872398',
      '9839872398',
      '9839872398', //15
      '9839872398', //16
      '9839872398', //17
      '9839872398', //18
      '9839872398', //19
      '9839872398', //20
      '9839872398', //21
      ]
    }, 
    {
      id: '002',
      terminalDestino: 'Pedregal',
      fecha: '05/04/2020',
      parcels: [
      '0090282982',
      '8917298729',
      '9712987298',
      '9839872398',
      '9839872398',
      '9839872398',
      '9839872398',
      '9839872398',
      '9839872398',
      '9839872398',
      '9839872398',
      '9839872398',
      '9839872398',
      '9839872398',
      '9839872398', //15
      ]
    },
    {
      id: '003',
      terminalDestino: 'Medallo',
      fecha: '03/04/2020', 
      parcels: [
      '0090282982',
      '8917298729',
      '9712987298',
      '9839872398',
      '9839872398',
      '9839872398',
      '9839872398',
      '9839872398',
      '9839872398',
      '9839872398',
      '9839872398',
      '9839872398',
      '9839872398',
      '9839872398',
      '9839872398', //15
      '9839872398', //16
      '9839872398', //17
      '9839872398', //18
      '9839872398', //19
      '9839872398', //20
      '9839872398', //21
      ]
    }
  ]

  doc = new jsPDF('p', 'px', 'letter');
  position = 0;
  widthCard = (this.doc.internal.pageSize.getWidth() - 12 ) / 3;
  heightCard = 100;
  positionX = 6;
  positionY = 87;
  img = new Image();
  positionXTextsCards = 12;
  positionYTextsCards = this.heightCard;
  positionXCodeBarCards = 30;
  positionYCodeBarCards = this.heightCard -6;
  breakPage = 2;
  indexCard = 0;
  documentPages = 0;
  constructor() { }

  ngOnInit() {
  }

  // textToBase64Barcode(text){
  //   var canvas = document.createElement("canvas");

  //   JsBarcode(canvas, text, {format: "CODE39"}); 
  //   return canvas.toDataURL("image/png");
  // }

  generatePdf() {
    // Fuente de las cards
    this.doc.addFileToVFS('Roboto-Regular.ttf', environment.VFS.roboto_regular);
    this.doc.addFont('Roboto-Regular.ttf', 'custom', 'normal');
    this.doc.setFont('custom');
    this.relaciones.forEach((relacion, index) => {
        // Saltar pagina para nueva relacion
      if (index > 0) {
        this.doc.addPage(); 
        this.documentPages ++;
      }
      this.indexCard = 0;
      this.breakPage = 2;
    // Encabezado
      // this.generateHeader(relacion)
      // Impresion de guias
      relacion.parcels.forEach((parcel, i) => {
        if (i % 15 === 0) {
          if (i !== 0) { 
            this.doc.addPage();
          }
          
          // this.breakPage = 2;
          this.generateHeader(relacion);
            // this.generateHeader(relacion);
            this.positionX = 6;
            this.positionY = 87;
            this.positionXTextsCards = 12;
            this.positionYTextsCards = this.heightCard;
            this.positionXCodeBarCards = 30;
            this.positionYCodeBarCards = this.heightCard -6;
  
            this.generateCards();
  
            // Corte de pagina en los costados
            if (this.indexCard === this.breakPage) {
              this.positionX = 6;
              this.positionXTextsCards = 12;
              this.positionXCodeBarCards = 30;
              this.positionY += this.heightCard;
              this.positionYTextsCards += this.heightCard;
              this.positionYCodeBarCards += this.heightCard;
              this.breakPage += 3
  
            } else {
              this.positionX += (this.doc.internal.pageSize.getWidth() - 12 ) / 3;
              this.positionXTextsCards += (this.doc.internal.pageSize.getWidth() - 12 ) / 3;
              this.positionXCodeBarCards += (this.doc.internal.pageSize.getWidth() - 12 ) / 3;
            }
        } else {  
          this.generateCards();          
          if (this.indexCard === this.breakPage) {
            this.positionX = 6;
            this.positionXTextsCards = 12;
            this.positionXCodeBarCards = 30;
            this.positionY += this.heightCard;
            this.positionYTextsCards += this.heightCard;
            this.positionYCodeBarCards += this.heightCard;
            this.breakPage += 3

          } else {
            this.positionX += (this.doc.internal.pageSize.getWidth() - 12 ) / 3;
            this.positionXTextsCards += (this.doc.internal.pageSize.getWidth() - 12 ) / 3;
            this.positionXCodeBarCards += (this.doc.internal.pageSize.getWidth() - 12 ) / 3;
          }
        }
        this.indexCard += 1;
      })
    
      console.log('index', index);
    

      // this.positionX = 6;
      // this.positionY = 87;
      // this.positionXTextsCards = 12;
      // this.positionYTextsCards = this.heightCard;
      // this.positionXCodeBarCards = 30;
      // this.positionYCodeBarCards = this.heightCard -6;
    
    });
    // this.doc.save('Test.pdf');
    this.doc.output('dataurlnewwindow'); 
    // window.open(this.doc.output('bloburl'), '_blank');
  }

  generateHeader(relacion) {
    this.img.src = 'assets/13-layersx4.png';
    this.doc.addImage(this.img, 'PNG', 8, 16, 134, 12);
    this.doc.setFontSize(12);

    this.doc.setTextColor(26, 24, 24);
    this.doc.text('Relación:', 207, 25 )

    this.doc.setTextColor(131, 131, 131);
    this.doc.text('#' + relacion.id, 247, 25)

    this.doc.setTextColor(26, 24, 24);
    this.doc.text('Fecha:', 326, 25)

    this.doc.setTextColor(131, 131, 131);
    this.doc.text(relacion.fecha, 356, 25)

    this.doc.setTextColor(26, 24, 24);
    this.doc.text('Pág:', 414, 25)

    this.doc.setTextColor(131, 131, 131);
    this.doc.text('1/12', 434, 25)

    this.doc.setDrawColor(0);
    this.doc.setFillColor(255, 255, 255);
    this.doc.roundedRect(8, 40, 54, 36, 3, 3, "FD");

    this.doc.addFileToVFS('Roboto-Medium.ttf', environment.VFS.roboto_medium);
    this.doc.addFont('Roboto-Medium.ttf', 'custom', 'normal');
    this.doc.setFont('custom');

    this.doc.setFontSize(15);
    this.doc.setTextColor(26, 24, 24);
    this.doc.text('Equipo:', 16, 54)
    
    this.doc.setFontSize(17);
    this.doc.setTextColor(131, 131, 131);
    this.doc.text('34', 27, 70)

    this.doc.setFontSize(14);
    this.doc.setTextColor(26, 24, 24);
    this.doc.text('Producto:', 75, 54)
    
    this.doc.setFontSize(14);
    this.doc.setTextColor(131, 131, 131);
    this.doc.text('Mercancía', 123, 54)

    this.doc.setFontSize(14);
    this.doc.setTextColor(26, 24, 24);
    this.doc.text('Terminal destino:', 75, 70)
    
    this.doc.setFontSize(14);
    this.doc.setTextColor(131, 131, 131);
    this.doc.text(relacion.terminalDestino, 158, 70)
    this.doc.addFileToVFS('Roboto-Regular.ttf', environment.VFS.roboto_regular);
    this.doc.addFont('Roboto-Regular.ttf', 'custom', 'normal');
    this.doc.setFont('custom');

    this.doc.setFontSize(14);
    this.doc.setTextColor(26, 24, 24);
    this.doc.text('Móvil: ______', 273, 54)

    this.doc.setFontSize(14);
    this.doc.setTextColor(26, 24, 24);
    this.doc.text('Muelle: _____', 273, 70)

    this.doc.setDrawColor(0);
    this.doc.setFillColor(255, 255, 255);
    this.doc.roundedRect(357, 40, 96, 36, 3, 3, "FD");

    this.doc.setFontSize(14);
    this.doc.setTextColor(26, 24, 24);
    this.doc.text('Guías:', 363, 54)

    this.doc.setFontSize(14);
    this.doc.setTextColor(131, 131, 131);
    this.doc.text('1.200', 396, 54)

    this.doc.setFontSize(14);
    this.doc.setTextColor(26, 24, 24);
    this.doc.text('Unidades:', 363, 70)
    
    this.doc.setFontSize(14);
    this.doc.setTextColor(131, 131, 131);
    this.doc.text('23.200', 413, 70)

    return this.doc;
  }

  generateCards() {
    this.doc.setTextColor(0o0);
    this.doc.rect(this.positionX, this.positionY, this.widthCard, this.heightCard);
    this.img.src = 'assets/codigo-barras.jpg';
    this.doc.addImage(this.img, 'png', this.positionXCodeBarCards, this.positionYCodeBarCards, 100, 25);

    this.doc.setFontSize(12);
    this.doc.text('De: Almacenes exito', this.positionXTextsCards, this.positionYTextsCards + 37)
    this.doc.text('Para: Yaiza Candelaria Rodrig', this.positionXTextsCards, this.positionYTextsCards + 49)
    this.doc.text('Unidades: 1.234', this.positionXTextsCards, this.positionYTextsCards + 61)
    this.doc.text('Salvedades: _ _ _ _ _ _ _ _ _ _ _', this.positionXTextsCards, this.positionYTextsCards + 73)
  }

}