export abstract class View<T> { // Abstract classes NÃO podem ser instanciadas.
    // Propriedades protected são visíveis pelas filhas, igual ao Java.
    protected elemento: HTMLElement; 
    private escapar = false;

    constructor(seletor: string, escapar: boolean) {
        this.elemento = document.querySelector(seletor)
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
