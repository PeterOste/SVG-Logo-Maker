// Created shape class.
class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        throw new Error('Invalid render');
    }
}

// Exporting necessary content.
module.exports = Shape;