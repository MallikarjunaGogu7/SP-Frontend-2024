const date = new Date("2012/2/30");

Date.prototype.isValid = function () {

    // If the date object is invalid it
    // will return 'NaN' on getTime()
    // and NaN is never equal to itself
    return this.getTime() === this.getTime();
};

function isValidateDate() {
    console.log(date.isValid());
}

isValidateDate();
