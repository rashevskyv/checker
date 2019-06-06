    function myFunction() {
        var x = document.getElementById("nxsn");
        if (x.validity.valid && x.value.length > 7) {
            var series = x.value.substring(2, 4).toUpperCase();
            var sn;
            switch (series) {
                case 'W1':
                    sn = x.value.substring(4, 8);
                    if (sn.localeCompare('012') >= 0) {
                        document.getElementById("result").innerHTML = '<div class="failed">Уязвимость устранена<br>Вы не сможете прошить приставку!</div>';
                    } else if (sn.localeCompare('0075') >= 0) {
                        document.getElementById("result").innerHTML = '<div class="maybe">Уязвимость возможно устранена<br>Если вы собираетесь купить эту консоль, подумайте ещё раз, если же уже купили, просто попробуйте</div>';
                    } else if (sn.localeCompare('0074') <= 0) {
                        document.getElementById("result").innerHTML = '<div class="passed">Уязвимость присутствует<br>Вы можете прошить эту приставку</div>';
                    } else {
                        document.getElementById("result").innerHTML = '<div class="unknown">Нет информации</div>';
                    }
                    break;
                case 'W4':
                    sn = x.value.substring(4, 8);
                    if (sn.localeCompare('0012') >= 0) {
                        document.getElementById("result").innerHTML = '<div class="failed">Уязвимость устранена<br>Вы не сможете прошить приставку!</div>';
                    } else if (sn.localeCompare('0011') >= 0) {
                        document.getElementById("result").innerHTML = '<div class="maybe">Уязвимость возможно устранена<br>Если вы собираетесь купить эту консоль, подумайте ещё раз, если же уже купили, просто попробуйте</div>';
                    } else if (sn.localeCompare('0011') < 0) {
                        document.getElementById("result").innerHTML = '<div class="passed">Уязвимость присутствует<br>Вы можете прошить эту приставку</div>';
                    } else {
                        document.getElementById("result").innerHTML = '<div class="unknown">Нет информации</div>';
                    }
                    break;
                case 'W7':
					sn = x.value.substring(4, 9);
					if (sn.localeCompare('003') >= 0) {
						document.getElementById("result").innerHTML = '<div class="failed">Уязвимость устранена<br>Вы не сможете прошить приставку!</div>';
					} else if (sn.localeCompare('00178') >= 0) {
						document.getElementById("result").innerHTML = '<div class="maybe">Уязвимость возможно устранена<br>Если вы собираетесь купить эту консоль, подумайте ещё раз, если же уже купили, просто попробуйте</div>';
					} else if (sn.localeCompare('00178') < 0) {
						document.getElementById("result").innerHTML = '<div class="passed">Уязвимость присутствует<br>Вы можете прошить эту приставку</div>';
					} else {
						document.getElementById("result").innerHTML = '<div class="unknown">Нет информации</div>';
					}
                    break;
                case 'J1':
                    sn = x.value.substring(4, 7);
                    if (sn.localeCompare('003') >= 0) {
                        document.getElementById("result").innerHTML = '<div class="failed">Уязвимость устранена<br>Вы не сможете прошить приставку!</div>';
                    } else if (sn.localeCompare('002') >= 0) {
                        document.getElementById("result").innerHTML = '<div class="maybe">Уязвимость возможно устранена<br>Если вы собираетесь купить эту консоль, подумайте ещё раз, если же уже купили, просто попробуйте</div>';
                    } else if (sn.localeCompare('002') < 0) {
                        document.getElementById("result").innerHTML = '<div class="passed">Уязвимость присутствует<br>Вы можете прошить эту приставку</div>';
                    } else {
                        document.getElementById("result").innerHTML = '<div class="unknown">Нет информации</div>';
                    }
                    break;
                case 'J4':
                    sn = x.value.substring(4, 9);
                    if (sn.localeCompare('006') >= 0) {
                        document.getElementById("result").innerHTML = '<div class="failed">Уязвимость устранена<br>Вы не сможете прошить приставку!</div>';
                    } else if (sn.localeCompare('0046') >= 0) {
                        document.getElementById("result").innerHTML = '<div class="maybe">Уязвимость возможно устранена<br>Если вы собираетесь купить эту консоль, подумайте ещё раз, если же уже купили, просто попробуйте</div>';
                    } else if (sn.localeCompare('0046') < 0) {
                        document.getElementById("result").innerHTML = '<div class="passed">Уязвимость присутствует<br>Вы можете прошить эту приставку</div>';
                    } else {
                        document.getElementById("result").innerHTML = '<div class="unknown">Нет информации</div>';
                    }
                    break;
                case 'J7':
					sn = x.value.substring(4, 9);
					if (sn.localeCompare('005') >= 0) {
						document.getElementById("result").innerHTML = '<div class="failed">Уязвимость устранена<br>Вы не сможете прошить приставку!</div>';
					} else if (sn.localeCompare('004') >= 0) {
						document.getElementById("result").innerHTML = '<div class="maybe">Уязвимость возможно устранена<br>Если вы собираетесь купить эту консоль, подумайте ещё раз, если же уже купили, просто попробуйте</div>';
					} else if (sn.localeCompare('004') < 0) {
						document.getElementById("result").innerHTML = '<div class="passed">Уязвимость присутствует<br>Вы можете прошить эту приставку</div>';
					} else {
						document.getElementById("result").innerHTML = '<div class="unknown">Нет информации</div>';
					}
                    break;
                case 'W9':
                    sn = x.value.substring(4, 9);
                    if (sn.localeCompare('00') >= 0) {
                        document.getElementById("result").innerHTML = '<div class="failed">Уязвимость, вероятнее всего, присутствует<br>Приставки этой серии - приставки, востановленные в самой Nintendo</div>';
                    }
                    break;
            }
        }
        else {
            document.getElementById("result").innerHTML = "";
        }
    }