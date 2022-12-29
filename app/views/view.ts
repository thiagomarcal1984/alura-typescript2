export abstract class View<T> { // Abstract classes NÃO podem ser instanciadas.
    // Propriedades protected são visíveis pelas filhas, igual ao Java.
    protected elemento: HTMLElement; 
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        // A constante recebe um objeto Element (ou mesmo null).
        const elemento = document.querySelector(seletor);
        if (elemento) {
            // Se o elemento não for nulo, força o cast para HTMLElement.
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique.`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }

    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template
                .replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
    
    // Forçar implementação do método em tempo de desenvolvimento/compilação.
    protected abstract template(model: T): string; 
}
