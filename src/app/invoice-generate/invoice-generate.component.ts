import { Component, OnInit } from '@angular/core';
import * as shajs from 'sha.js';
import * as qz from 'qz-tray';

@Component({
  selector: 'app-invoice-generate',
  templateUrl: './invoice-generate.component.html',
  styleUrls: ['./invoice-generate.component.css']
})
export class InvoiceGenerateComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    qz.api.setSha256Type(function (data) {
      return shajs('sha256').update(data).digest('hex')
    })

    qz.api.setPromiseType(function (resolver) {
      return new Promise(resolver);
    });


//    qz.websocket.connect().then(function() { 
//     return qz.printers.find("TM-T20II");              // Pass the printer name into the next Promise
//  }).then(function(printer) {
//     var config = qz.configs.create(printer);       // Create a default config for the found printer
//     var data = [`
//     "\n\n       COORDINADORA MERCANTIL S.A.       \n            NIT 890.904.713-2            \n  Carrera 14 No. 83-177 Villa Olimpica  \n                 3370440                 \n              PEREIRA (RS)              \nFECHA: 2020-03-30 HORA: 11:45:42\nMAQUINA NRO: 18110522501310\nTIQUETE: P04-310534\nMODALIDAD:   FCE   TERM REC: 4\nNIT CLIENTE: 12345678\nNOMBRE CLIENTE:\nRE OGIDA AG\nRECIBIDOR:   749   MOVIL: 56\n\nSERVICIO TRANSPORTE - RELACION DESPACHOS\n----------------------------------------\n!!BARCODE20040403990BARCODE!!\nGUIA:  20040403990 MCIA.\nRECIBIDOR: 749\n\nRMTE:  RE OGIDA AG\nDEST:  SARA LOPEZ\nDIR  :  CL 1 N 2 A 25\nDOC  :\nCONT :  ROPA\nOBS  :\nZONA HUB  :  156\nEQUIPO_ENTREGA  :  25\nSUPIA (CDAS)-ARMENIA (QDIO)\n\nUNDS PESO  VALORACION FLETE        TOTAL\n----------------------------------------\n   2 60.0      20,000   FCE       52,100\n----------------------------------------\n\n          DESPACHOS:                   1\n          UNIDADES:                    2\n          TOTAL FACTURA:          52,100\n          VENTAS EXCLUIDAS:       52,100\n\n========================================\n\nLos valores reportados  estan  sujetos a\nauditorias, las diferencias generadas se\n      ajustaran con el cliente          \n\n  Los Servicios Postales de Mensajeria  \n  Expresa se rigen por la Ley 1369 de   \n    2009. Consulte \"Las Condiciones     \n Generales de Presentacion de Servicios \n   Postales\" en nuestro sitio virtual   \n  www.coordinadora.com, de acuerdo con  \n      la Resolucion 3038 de 2011.       \n      Linea de Atencion al usuario      \n      01-8000-520555 o al correo:       \n  atencionalusuario(a)coordinadora.com  \n\n         VIGILADO SUPERTRANSPORTE  \n\n  Somos Autoretenedores segun Res. Nro. \n        000121 de Agosto 17/93.         \n  Grandes contribuyentes; Responsable   \n  de IVA.   Agente Retenedor de IVA.     \n   Actividad Economica Principal 4923.  \n\n      Transporte excluido de IVA.       \n     AUT. DIAN  No. 18763004587341\n     2020-02-26  Vig. 12 Meses del\n      P04-310494 al P04-320000\n\r\nAutorretenedor ICA Pereira Articulo 53 \r\nAcuerdo 041 2012\n   Visitenos en www.coordinadora.com\n      Linea de atencion al cliente\n             018000 520 555\n\nSi requiere factura electronica debe\n      registrarse en la pagina WEB\nwww.coordinadora.com/mi-coordinadora/-\n-facturacion-electronica y diligenciar\nel formulario de Facturacion Electronica\n",
//     "-------------------------------------\n|      FACTURA CANCELADA             |\n-------------------------------------\n\n\n       COORDINADORA MERCANTIL S.A.       \n            NIT 890.904.713-2            \n  Carrera 14 No. 83-177 Villa Olimpica  \n                 3370440                 \n              PEREIRA (RS)              \nFECHA: 2020-03-30 HORA: 11:45:42\nMAQUINA NRO: 18110522501310\nTIQUETE: P04-310535\nMODALIDAD:   FCE   TERM REC: 4\nNIT CLIENTE: 2356895\nNOMBRE CLIENTE: pALMA Q LTDA\nRECIBIDOR:   749   MOVIL: 56\n\nSERVICIO TRANSPORTE - RELACION DESPACHOS\n----------------------------------------\n!!BARCODE20040403991BARCODE!!\nGUIA:  20040403991 Mercancia\nRECIBIDOR: 749\nRMTE:  RE OGIDA AG\nDEST:  pALMA Q LTDA\nDIR  :  CR 5 B N 76 68\nDOC  :\nCONT :  DOC\nOBS  :\nZONA HUB  :  0\nEQUIPO_ENTREGA  :  0\nARMENIA (QDIO)-ARMENIA (QDIO)\n\nUNDS PESO  VALORACION FLETE        TOTAL\n----------------------------------------\n   2 72.0      20,000   FCE       31,452\n----------------------------------------\n\n          DESPACHOS:                   1\n          UNIDADES:                    2\n          TOTAL FACTURA:          31,452\n          VENTAS EXCLUIDAS:       31,452\n\n========================================\n\nLos valores reportados  estan  sujetos a\nauditorias, las diferencias generadas se\n      ajustaran con el cliente          \n\n  Los Servicios Postales de Mensajeria  \n  Expresa se rigen por la Ley 1369 de   \n    2009. Consulte \"Las Condiciones     \n Generales de Presentacion de Servicios \n   Postales\" en nuestro sitio virtual   \n  www.coordinadora.com, de acuerdo con  \n      la Resolucion 3038 de 2011.       \n      Linea de Atencion al usuario      \n      01-8000-520555 o al correo:       \n  atencionalusuario(a)coordinadora.com  \n\n         VIGILADO SUPERTRANSPORTE  \n\n  Somos Autoretenedores segun Res. Nro. \n        000121 de Agosto 17/93.         \n  Grandes contribuyentes; Responsable   \n  de IVA.   Agente Retenedor de IVA.     \n      Transporte excluido de IVA.       \n   Actividad Economica Principal 4923.  \n\nFactura POS-Res DIAN \nNo. 18763004587341\ndel 2020-02-26 del\nP04-310494 al P04-320000\n\r\nAutorretenedor ICA Pereira Articulo 53 \r\nAcuerdo 041 2012\n   Visitenos en www.coordinadora.com\n\n      Linea de atencion al cliente\n             018000 520 555\n-------------------------------------\n|      FACTURA CANCELADA             |\n-------------------------------------\n"
//     `];   // Raw ZPL
//     return qz.print(config, data);
//  }).catch(function(e) { console.error(e); });


  }

}
