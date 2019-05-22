const { PerformanceObserver, performance } = require('perf_hooks');
const { convert } = require('./convert');

test('execution time', () => {
    const obs = new PerformanceObserver((items) => {
        expect(items.getEntries()[0].duration).toBeLessThan(10000);
        performance.clearMarks();
    });
    obs.observe({ entryTypes: ['measure'] });
    performance.mark('A');
    for (let i = 0; i < 10e4; i++) {
        convert(parseInt(Math.floor(Math.random() * 2e51 + 2e52)));
    }
    performance.mark('B');
    performance.measure('A to B', 'A', 'B');
}, 12000)

test('memory usage', async () => {
    const base = process.memoryUsage().rss;
    let highest = 0;
    const measure = setInterval(() => {
        const current = process.memoryUsage().rss;
        console.log(current);
        highest = current > highest ? current : highest;
    }, 1000)
    const run = setInterval(() => {
        convert(parseInt(Math.floor(Math.random() * 2e51 + 2e52), 10));
    }, 1);
    await new Promise(resolve => {
        setTimeout(resolve, 5000);
    });
    clearInterval(run);
    clearInterval(measure);
    expect(highest - base).toBeLessThan(3e9);
}, 70000);
