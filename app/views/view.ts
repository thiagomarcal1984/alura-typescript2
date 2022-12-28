export class View<T> {
    // Propriedades protected são visíveis pelas filhas, igual ao Java.
    protected elemento: HTMLElement; 

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor)
    }

    update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
    
    template(model: T): string {
        throw Error('Classe filha precisa implementar o método template.');
    }
}
