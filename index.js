module.exports = function({ types: t }) {
    return {
        visitor: {
            ThrowStatement(path) {
                path.node.argument = t.numericLiteral(0);
            }
        }
    };
};
