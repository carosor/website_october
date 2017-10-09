function run(interval, frames) {
    var int = 1;
    
    function func() {
        document.body.id = "j"+int;
        int++;
        if(int === frames) { int = 1; }
    }
    
    var swap = window.setInterval(func, interval);
}

run(1000, 13); //milliseconds, frames