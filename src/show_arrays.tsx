
const show_arrays=()=>{
    const matrix2d:any[] = []
    matrix2d[1] = [3,2,4]
    console.log("=== matrix2d)",matrix2d)
    console.log("=== matrix2d)",matrix2d[1][2])



    const matrix3d = new Array()
    var Object3d:any = new Object()

    for (let i = 0; i < 3; i++) {
        matrix3d[i] = new Array()
        Object3d['x'+i] = new Object()
        for (let j = 0; j < 3; j++) {
            matrix3d[i][j] = new Array()
            Object3d['x'+i]['y'+j] = new Object()
            for (let k = 0; k < 3; k++) {
                Object3d['x'+i]['y'+j]['z'+k] = i+'-'+j+'-'+k
                // matrix3d['x'+i.toString()]['y'+j.toString()]['z'+k.toString()] = i+'-'+j+'-'+k
                // matrix3d[i][j][k] = i+'-'+j+'-'+k
                // Object3d['x-'+i.toString()] = ['y-'+j]
            }
        }
    }
    console.log("=== Object3d.x1.y1.z1",Object3d.x1.y1.z1)
    Object3d.x1.y1.z1 = "RRRRRRRRRRRR"
    console.log("=== Object3d.x1.y1.z1",Object3d.x1.y1.z1)
    console.log("=== Object3d",Object3d)

}

export {show_arrays}
