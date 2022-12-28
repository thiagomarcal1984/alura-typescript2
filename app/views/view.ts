export class View {
    // Propriedades protected são visíveis pelas filhas, igual ao Java.
    protected elemento: HTMLElement; 

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor)
    }
}
