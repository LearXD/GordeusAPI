import clc from 'cli-color';

export default class {

    static getDatePrefix() {
        const date = new Date(Date.now());
        return `[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]`;
    }

    static getColorDatePrefix() {
        const date = new Date(Date.now());
        return `${clc.white("[")}${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}${clc.white("]")}`;
    }
    
    static info(text: string) {
        console.log(this.getColorDatePrefix() + clc.blue(" [INFO] " + text));
    }

    static alert(text: string) {
        console.log(this.getColorDatePrefix() + clc.yellow(" [ALERTA] " + text));
    }

    static error(text: string) {
        console.log(this.getColorDatePrefix() + clc.red(" [ERRO] " + text));
    }
}
