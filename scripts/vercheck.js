    function myFunction() {
        var x = document.getElementById("nxsn");
        if (x.validity.valid && x.value.length > 7) {
            var series = x.value.substring(2, 4).toUpperCase();
            var sn;
            switch (series) {
                case 'W1':
                    sn = x.value.substring(4, 8);
                    if (sn.localeCompare('01') >= 0) {
                        document.getElementById("result").innerHTML = "Уязвимость устранена";
                    } else if (sn.localeCompare('0079') >= 0) {
                        document.getElementById("result").innerHTML = "Уязвимость возможно устранена";
                    } else if (sn.localeCompare('0078') <= 0) {
                        document.getElementById("result").innerHTML = "Уязвимость присутствует";
                    } else {
                        document.getElementById("result").innerHTML = "Нет информации";
                    }
                    break;
                case 'W4':
                    sn = x.value.substring(4, 8);
                    if (sn.localeCompare('0013') >= 0) {
                        document.getElementById("result").innerHTML = "Уязвимость устранена";
                    } else if (sn.localeCompare('0012') >= 0) {
                        document.getElementById("result").innerHTML = "Уязвимость возможно устранена";
                    } else if (sn.localeCompare('0011') <= 0) {
                        document.getElementById("result").innerHTML = "Уязвимость присутствует";
                    } else {
                        document.getElementById("result").innerHTML = "Нет информации";
                    }
                    break;
                case 'W7':
                    if (x.value.length > 8) {
                        sn = x.value.substring(4, 9);
                        if (sn.localeCompare('0019') >= 0) {
                            document.getElementById("result").innerHTML = "Уязвимость устранена";
                        } else if (sn.localeCompare('00179') >= 0) {
                            document.getElementById("result").innerHTML = "Уязвимость возможно устранена";
                        } else if (sn.localeCompare('00178') <= 0) {
                            document.getElementById("result").innerHTML = "Уязвимость присутствует";
                        } else {
                            document.getElementById("result").innerHTML = "Нет информации";
                        }
                    } else {
                        document.getElementById("result").innerHTML = "";
                    }
                    break;
                case 'J1':
					sn = x.value.substring(4, 8);
                    if (sn.localeCompare('0031') >= 0) {
                        document.getElementById("result").innerHTML = "Уязвимость возможно устранена";
                    } else if (sn.localeCompare('0030') <= 0) {
                        document.getElementById("result").innerHTML = "Уязвимость присутствует";
                    } else {
                        document.getElementById("result").innerHTML = "Нет информации";
                    }
                    break;
                case 'J4':
                    sn = x.value.substring(4, 8);
                    if (sn.localeCompare('006') >= 0) {
                        document.getElementById("result").innerHTML = "Уязвимость устранена";
                    } else if (sn.localeCompare('0051') >= 0) {
                        document.getElementById("result").innerHTML = "Уязвимость возможно устранена";
                    } else if (sn.localeCompare('0050') <= 0) {
                        document.getElementById("result").innerHTML = "Уязвимость присутствует";
                    } else {
                        document.getElementById("result").innerHTML = "Нет информации";
                    }
                    break;
                case 'J7':
                    sn = x.value.substring(4, 8);
                    if (sn.localeCompare('005') >= 0) {
                        document.getElementById("result").innerHTML = "Уязвимость устранена";
                    } else if (sn.localeCompare('0043') >= 0) {
                        document.getElementById("result").innerHTML = "Уязвимость возможно устранена";
                    } else if (sn.localeCompare('0042') <= 0) {
                        document.getElementById("result").innerHTML = "Уязвимость присутствует";
                    } else {
                        document.getElementById("result").innerHTML = "Нет информации";
                    }
                    break;
            }
        }
        else {
            document.getElementById("result").innerHTML = "";
        }
    }