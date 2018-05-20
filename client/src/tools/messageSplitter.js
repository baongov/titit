export function splitMessage(message) {
    if (message.length <= 50) {
        return [message];
    }
    var tokens = message.split(' ');
    var result = [];
    //Check if message contains a token longer than 50 characters
    var index;
    for (index = 0; index < tokens.length; index++) {
        if (tokens[index].length > 50) {
            return "Error while splitting message."
        }
    };

    var rightIndicatorLength = 1;
    while (true) {
        var leftIndicator = 1;
        var startIndex = 0;

        while (startIndex < tokens.length) {
            if (String(leftIndicator).length > rightIndicatorLength) {
                rightIndicatorLength += 1;
                result = [];
                break;
            }

            var limit = 50 - (String(leftIndicator).length + rightIndicatorLength + 2);
            var splittedMsg = "";

            //Write splitted message to 'result' with calculated limit
            splittedMsg += tokens[startIndex];
            startIndex += 1;
            while (startIndex < tokens.length) {
                var temp = (splittedMsg + " " + tokens[startIndex]);
                if (temp.length > limit) {
                    break;
                }
                splittedMsg = temp;
                startIndex += 1
            }

            result.push(splittedMsg)
            leftIndicator += 1;
        };

        if (result.length != 0) {
            break;
        }
    }

    index = 0;
    var indicatorMessages = result.map(function (msg) {
        var indicatorMessage = String(index + 1) + "/" + String(result.length) + " " + msg;

        index += 1;
        return indicatorMessage;
    })

    return indicatorMessages
}