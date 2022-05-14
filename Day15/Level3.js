class Statistics {
    constructor(ages) {
        this.age = ages;
    }
    count() {
        let len = this.age.length;
        return len;
    }
    sum() {
        let s = 0;
        for (let i = 0; i < this.age.length; i++) {
            s = s + this.age[i];
        }
        return s;

    }
    min() {
        this.age.sort(function (a, b) { return a - b });
        return this.age[0];
    }
    max() {
        this.age.sort(function (a, b) { return a - b });
        return this.age[this.age.length - 1];
    }
    range() {
        this.age.sort(function (a, b) { return a - b });
        let r = this.age[this.age.length - 1] - this.age[0];
        return r;

    }
    mean() {
        let s = 0;
        for (let i = 0; i < this.age.length; i++) {
            s = s + this.age[i];
        }
        let len = this.age.length;
        return Math.ceil(s / len);
    }
    median() {
        this.age.sort(function (a, b) { return a - b });

        let m = (this.age.length) / 2;
        return this.age[Math.floor(m)];
    }
    mode() {
        this.age.sort(function (a, b) { return a - b });
        var mf = 1;
        var m = 0;
        var item;
        for (var i = 0; i < this.age.length; i++) {
            for (var j = i; j < this.age.length; j++) {
                if (this.age[i] == this.age[j])
                    m++;
                if (mf < m) {
                    mf = m;
                    item = this.age[i];
                }
            }
            m = 0;
        }

        return `mode:${item},c:${mf}`;
    }
    var() {

    }
    std() 
    {
        let meann = this.age.reduce((acc,val)=> acc+val,0)/this.age.length; 
        return Math.sqrt(
            arr.reduce((acc,val)=>acc.concat((val-mean)**2),[]).reduce((acc,val)=>acc+val,0)/(this.age.length-1)
        )
    }
    freqDist() {

    }
}

const stats = new Statistics([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]);

console.log('Count:' + stats.count());
console.log('Sum:' + stats.sum());
console.log('Min' + stats.min());
console.log('Max:' + stats.max());
console.log('Range:' + stats.range());
console.log('Mean:' + stats.mean());
console.log('Median:' + stats.median());
console.log('Mode: ' + stats.mode());
console.log('Variance:' + stats.var());
console.log('Standard Deviation:' + stats.var());
console.log('Frequency Distribution:' + stats.freqDist());
