
// LINKED LIST

list = {
    head: {
        value: 'red',
        next: {
            value: 'orange',
            next: {
                value: 'yellow',
                next: {
                    value: 'green',
                    next: {
                        value: 'blue',
                        next: {
                            value: 'indigo',
                            next: {
                                value: 'violet',
                                next: null
                            }
                        }
                    }
                }
            }
        }
    },
    tail: {
        value: 'violet',
        next: null
    }
};
// NOTE: the tail points to the same object you see at the end of the head list (there are not two separate versions of that object)