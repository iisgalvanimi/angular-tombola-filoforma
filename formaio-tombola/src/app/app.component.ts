import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formaio-tombola';
  numeriUsciti: Array<number>=[];
  ultimoNumero: string="...";
  generaNumero(){
    var check=false;
    //ciclo per non estrarre duplicati
    //il ciclo si ripete finché non si trova un numero diverso
    while(check==false){
      var numero= Math.round(Math.random()*99+1);
      check=true;
      for (var i=0; i< this.numeriUsciti.length; i++){
        if (numero==this.numeriUsciti[i]){
          check=false;
        }
      }
      if (check){
        this.numeriUsciti.push(numero);
        console.log(numero); //limiti inclusi
        var riga=document.getElementById("visuaNumero");
        riga.innerHTML=""+numero;
        this.ultimoNumero=""+numero;
        if (this.numeriUsciti.length==100){
          //i numeri sono finiti
          console.log("numeri finit!");
          var bottone= document.getElementById("bottone");
          bottone.setAttribute("disabled","disabled");
          alert("Tutti i numeri sono stati estratti!");
          return false;
        }
      }
    }
    return false;
  }
}
