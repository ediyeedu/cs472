console.log(global);
 console.log(process);
// console.log(process.version);
// console.log(process.memoryUsage());

// console.log(__filename)
// console.log(__dirname)

// function cb1() { console.log('1'); }
// function cb2() { console.log('2'); }
// function cb3() { console.log('3'); }
// function cb4() { console.log('4'); }
// function cb5() { console.log('5'); }

// process.nextTick(cb1);
// setTimeout(cb2, 0);
// Promise.resolve().then(cb4);
// process.nextTick(cb3);
//setImmediate(cb5)

// 1
// 3
// 4
// 2
// 5



// process.nextTick(() => {
//     console.log('5');
// })

// setTimeout(() => { console.log('timeout'); }, 0);
// process.nextTick(() => console.log('nexttick'));
// setImmediate(() => { console.log('immediate'); });
