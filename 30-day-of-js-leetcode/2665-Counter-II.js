var createCounter = function (init) {
    let current = init;

    return {
        increment: function () {
            return ++current;
        },
        decrement: function () {
            return --current;
        },
        reset: function () {
            current = init;
            return current;
        }
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */