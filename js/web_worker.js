function timedCount(i) {
    i = i + 1;
    postMessage(i);
    setTimeout(timedCount.bind(null,i), 500)
}