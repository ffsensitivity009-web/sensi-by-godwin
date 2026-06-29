function calculateSensitivity(phone){

    let general = 180;
    let redDot = 175;
    let scope2x = 165;
    let scope4x = 155;
    let sniper = 100;
    let freeLook = 70;

    // RAM
    if(phone.ram >= 8){
        general += 10;
        redDot += 10;
        scope2x += 10;
        scope4x += 10;
        freeLook += 5;
    }else if(phone.ram >= 6){
        general += 5;
        redDot += 5;
        scope2x += 5;
        scope4x += 5;
    }

    // Refresh Rate
    if(phone.refreshRate >= 120){
        general += 10;
        redDot += 10;
        scope2x += 10;
    }else if(phone.refreshRate >= 90){
        general += 5;
        redDot += 5;
    }

    // Processor
    const cpu = phone.processor.toLowerCase();

    if(
        cpu.includes("snapdragon 8") ||
        cpu.includes("dimensity 9200") ||
        cpu.includes("a17") ||
        cpu.includes("a16")
    ){
        general = 200;
        redDot = 200;
        scope2x = 190;
        scope4x = 180;
    }

    return{
        general,
        redDot,
        scope2x,
        scope4x,
        sniper,
        freeLook
    };

}