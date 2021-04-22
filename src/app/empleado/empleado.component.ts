import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template: '<p>Aquí iría un empleado</p>',
  styleUrls: ['./empleado.component.css'],
  //styles: ['p{background-color: red;'],
})
export class EmpleadoComponent implements OnInit {
  nombre = 'Maria';
  apellido = 'Díaz';
  empresa = 'Pildoras Informáticas';
  // private edad = 20;
  edad = 20;
  cambiaEmpresa(event: Event) {
    this.empresa = (<HTMLInputElement>event.target).value;
  }
  llamaEmpresa(value: string) {}

  habilitacionCuadro = true;

  usuRegistrado = false;

  textoDeRegistro = 'No hay nadie registrado';
  textoGenero = '';
  textoNacionalidad = '';
  //textoRegistrado = 'Registrado';

  getRegistroUsuario() {
    this.usuRegistrado = false;
  }
  setUsuarioRegistrado(event: Event) {
    //alert('El usuario se acaba de registrar');
    //this.textoDeRegistro = 'El usuario se acaba de registrar';
    if ((<HTMLInputElement>event.target).value == 'si') {
      this.textoDeRegistro = 'El usuario se acaba de registrar';
    } else {
      this.textoDeRegistro = 'Usuario no registrado';
    }
  }
  setNacionalidad(event: Event) {
    if ((<HTMLInputElement>event.target).value == 'p') {
      this.textoNacionalidad = 'Peruan(a)';
    } else {
      this.textoNacionalidad = 'Ecuatorian(a)';
    }
  }

  setGenero(event: Event) {
    if ((<HTMLInputElement>event.target).value == 'f') {
      this.textoGenero = 'Femenino';
    } else {
      this.textoGenero = 'Masculino';
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
