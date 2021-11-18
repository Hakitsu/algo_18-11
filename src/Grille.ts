//import type {IView3D } from "./View3D"

export interface IGrilleConfig {
    readonly canvas: HTMLCanvasElement
    readonly data: Array<Array<number>>
    readonly blockStyles: { [ blockValue: number]: string }
    readonly couleurFond: string
    readonly couleurGrille: string
    readonly nbRayons: number
    readonly angleRayons: number
    readonly vue: IView3D
}

export interface IGrille {
    data: Array<Array<number>>
    nbColonnes: number
    nbLignes: number
    blockStyles: { [ blockValue: number]: string }
    couleurFond: string
    couleurGrille: string
    blockHeight: number
    blockWidth: number
    //rayons: Array<{x1: number, y1: number, x2: number, y2: number}>
    //intersections: Array<IIntersection>
    dessineGrille (): void
    dessineBlocks (): void
    //dessineRayons (): void
    dessine (): void
    //lanceRayons (x: number, y: number, angle: number): void
}

export class Grille implements IGrille{
    readonly canvas: HTMLCanvasElement
    readonly ctx: CanvasRenderingContext2D
    data: Array<Array<number>>
    nbColonnes : number
    nbLignes : number
    blockStyles: { [ blockValue: number]: string }
    couleurFond: string
    couleurGrille: string
    blockHeight: number
    blockWidth: number
    angleRayons : number

    constructor(opts : IGrilleConfig){
        this.canvas = opts.canvas
        this.ctx= opts.canvas.getContext("2d") as CanvasRenderingContext2D
        this.data = opts.data
        this.nbColonnes = opts.data[0].length
        this.nbLignes = opts.data.length
        this.blockStyles = opts.blockStyles
        this.couleurFond = opts.couleurFond
        this.couleurGrille = opts.couleurGrille
        this.blockHeight = Math.round(this.canvas.height / this.data.length)
        this.blockWidth = Math.round( this.canvas.width / this.nbColonnes)
        this.angleRayons = opts.angleRayons
    }

    dessineGrille () {
        this.ctx.fillStyle = this.couleurFond
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.strokeStyle = this.couleurGrille
        this.ctx.beginPath()
        for (let i = 1; i < this.data.length; i++) {
            const y = i * this.blockHeight
            this.ctx.moveTo(0, y)
            this.ctx.lineTo(this.canvas.width, y)
        }
        for (let i = 1; i < this.data[0].length; i++) {
            const x = i * this.blockWidth
            this.ctx.moveTo(x, 0)
            this.ctx.lineTo(x, this.canvas.height)
        }
        this.ctx.closePath()
        this.ctx.stroke()
    }

    dessineBlocks(){
        this.ctx.strokeStyle = this.blockStyles
        this.ctx.beginPath()
        for (let i = 1; i < this.data.length; i++) {
            const y = i * this.blockHeight
            this.ctx.moveTo(0, y)
            const x = i * this.blockWidth
            this.ctx.moveTo(0, x)
            this.ctx.lineTo(this.canvas.width, y)
            this.ctx.lineTo(x, this.canvas.height)
        }
        this.ctx.closePath()
        this.ctx.stroke()
    }

    dessine(){}
    
}