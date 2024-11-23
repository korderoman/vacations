import { ApplicationRef, ComponentRef, createComponent, Injectable, Injector, Type } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private componentRef!: ComponentRef<any>;
  private modalContainer!: HTMLElement;

  constructor(
    private appRef: ApplicationRef,
    private injector: Injector,
  ) {}

  open<T>(component: Type<T>, inputs?: Partial<T>): ComponentRef<T> {
    // Crear un nodo para el modal
    this.modalContainer = document.createElement('div');
    //this.modalContainer.classList.add('modal-container');
    document.body.appendChild(this.modalContainer);

    // Crear el componente dinámicamente
    this.componentRef = createComponent(component, {
      environmentInjector: this.appRef.injector,
    });

    // Pasar inputs al componente
    if (inputs) {
      Object.assign(this.componentRef.instance, inputs);
    }

    // Adjuntar el componente al DOM
    this.appRef.attachView(this.componentRef.hostView);
    this.modalContainer.appendChild((this.componentRef.hostView as any).rootNodes[0]);
    return this.componentRef;
  }

  close(): void {
    // Destruir el componente y eliminar el nodo del DOM
    if (this.componentRef) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
    }
    if (this.modalContainer) {
      document.body.removeChild(this.modalContainer);
    }
  }
}
