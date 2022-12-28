export abstract class View<T> { // Abstract classes NÃO podem ser instanciadas.
    // Propriedades protected são visíveis pelas filhas, igual ao Java.
    protected elemento: HTMLElement; 

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor)
    }

    public update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
    
    // Forçar implementação do método em tempo de desenvolvimento/compilação.
    protected abstract template(model: T): string; 
}
