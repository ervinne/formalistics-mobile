
function typeSafeHttpCallbacks(callbacks) {
    if (!callbacks) {
        callbacks = {};
    }

    if (!callbacks.onSuccess) {
        callbacks.onSuccess = function (response) {
            console.log('Success', response);
        };
    }

    if (!callbacks.onError) {
        callbacks.onError = function (response) {
            console.log('Error', response);
        };
    }
}
