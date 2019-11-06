    function myFunction() {
        var x = document.getElementById("nxsn");
        if (x.validity.valid && x.value.length > 7) {
            var series = x.value.substring(2, 4).toUpperCase();
            var sn;
            switch (series) {
                case 'W1':
                    sn = x.value.substring(4, 8);
                    if (sn.localeCompare('012') >= 0) {
                        document.getElementById("result").innerHTML = '<div class="failed">Уязвимость устранена<br>Вы не сможете прошить приставку!<br><br>Однако, если версия системного ПО на консоли 4.1.0, то её можно прошить с помощью <a href="http://switch.customfw.xyz/caffeine">Caffeine</div>';
                    } else if (sn.localeCompare('0075') >= 0) {
                        document.getElementById("result").innerHTML = '<div class="maybe">Уязвимость возможно устранена<br>Если вы собираетесь купить эту консоль, подумайте ещё раз, если же уже купили, просто попробуйте</div><p>Единственный верный способ, который поможет понять прошивается ваша приставка или нет - <a href="http://switch.customfw.xyz/fusee-gelee">попробовать</a>. Если приставка прошиваемая, она запустит переданный ей пейлоад. Если нет, экран останется чёрным, хотя в окне tegrarcmGUI и будет показано, что пейлоад проброшен успешно: <br><br>Значение <strong>0x0000</strong> в логе программы означает, что вашу приставку нельзя прошить с помощью <a href="http://switch.customfw.xyz/fusee-gelee">Fusée Gelée</a><br><br><img src="http://check.customfw.xyz/tegra.png"></p>';
                    } else if (sn.localeCompare('0074') <= 0) {
                        document.getElementById("result").innerHTML = '<div class="passed">Уязвимость присутствует<br>Вы можете прошить эту приставку</div>';
                    } else {
                        document.getElementById("result").innerHTML = '<div class="unknown">Нет информации</div>';
                    }
                    break;
                    
                case 'W4':
                    sn = x.value.substring(4, 8);
                    if (sn.localeCompare('0012') >= 0) {
                        document.getElementById("result").innerHTML = '<div class="failed">Уязвимость устранена<br>Вы не сможете прошить приставку!<br><br>Однако, если версия системного ПО на консоли 4.1.0, то её можно прошить с помощью <a href="http://switch.customfw.xyz/caffeine">Caffeine</div>';
                    } else if (sn.localeCompare('0011') >= 0) {
                        document.getElementById("result").innerHTML = '<div class="maybe">Уязвимость возможно устранена<br>Если вы собираетесь купить эту консоль, подумайте ещё раз, если же уже купили, просто попробуйте</div><p>Единственный верный способ, который поможет понять прошивается ваша приставка или нет - <a href="http://switch.customfw.xyz/fusee-gelee">попробовать</a>. Если приставка прошиваемая, она запустит переданный ей пейлоад. Если нет, экран останется чёрным, хотя в окне tegrarcmGUI и будет показано, что пейлоад проброшен успешно: <br><br>Значение <strong>0x0000</strong> в логе программы означает, что вашу приставку нельзя прошить с помощью <a href="http://switch.customfw.xyz/fusee-gelee">Fusée Gelée</a><br><br><img src="http://check.customfw.xyz/tegra.png"></p>';
                    } else if (sn.localeCompare('0011') < 0) {
                        document.getElementById("result").innerHTML = '<div class="passed">Уязвимость присутствует<br>Вы можете прошить эту приставку</div>';
                    } else {
                        document.getElementById("result").innerHTML = '<div class="unknown">Нет информации</div>';
                    }
                    break;
                    
                case 'W7':
					sn = x.value.substring(4, 9);
					if (sn.localeCompare('003') >= 0) {
						document.getElementById("result").innerHTML = '<div class="failed">Уязвимость устранена<br>Вы не сможете прошить приставку!<br><br>Однако, если версия системного ПО на консоли 4.1.0, то её можно прошить с помощью <a href="http://switch.customfw.xyz/caffeine">Caffeine</div>';
					} else if (sn.localeCompare('00178') >= 0) {
						document.getElementById("result").innerHTML = '<div class="maybe">Уязвимость возможно устранена<br>Если вы собираетесь купить эту консоль, подумайте ещё раз, если же уже купили, просто попробуйте</div><p>Единственный верный способ, который поможет понять прошивается ваша приставка или нет - <a href="http://switch.customfw.xyz/fusee-gelee">попробовать</a>. Если приставка прошиваемая, она запустит переданный ей пейлоад. Если нет, экран останется чёрным, хотя в окне tegrarcmGUI и будет показано, что пейлоад проброшен успешно: <br><br>Значение <strong>0x0000</strong> в логе программы означает, что вашу приставку нельзя прошить с помощью <a href="http://switch.customfw.xyz/fusee-gelee">Fusée Gelée</a><br><br><img src="http://check.customfw.xyz/tegra.png"></p>';
					} else if (sn.localeCompare('00178') < 0) {
						document.getElementById("result").innerHTML = '<div class="passed">Уязвимость присутствует<br>Вы можете прошить эту приставку</div>';
					} else {
						document.getElementById("result").innerHTML = '<div class="unknown">Нет информации</div>';
					}
                    break;
                    
                case 'J1':
                    sn = x.value.substring(4, 7);
                    if (sn.localeCompare('003') >= 0) {
                        document.getElementById("result").innerHTML = '<div class="failed">Уязвимость устранена<br>Вы не сможете прошить приставку!<br><br>Однако, если версия системного ПО на консоли 4.1.0, то её можно прошить с помощью <a href="http://switch.customfw.xyz/caffeine">Caffeine</div>';
                    } else if (sn.localeCompare('002') >= 0) {
                        document.getElementById("result").innerHTML = '<div class="maybe">Уязвимость возможно устранена<br>Если вы собираетесь купить эту консоль, подумайте ещё раз, если же уже купили, просто попробуйте</div><p>Единственный верный способ, который поможет понять прошивается ваша приставка или нет - <a href="http://switch.customfw.xyz/fusee-gelee">попробовать</a>. Если приставка прошиваемая, она запустит переданный ей пейлоад. Если нет, экран останется чёрным, хотя в окне tegrarcmGUI и будет показано, что пейлоад проброшен успешно: <br><br>Значение <strong>0x0000</strong> в логе программы означает, что вашу приставку нельзя прошить с помощью <a href="http://switch.customfw.xyz/fusee-gelee">Fusée Gelée</a><br><br><img src="http://check.customfw.xyz/tegra.png"></p>';
                    } else if (sn.localeCompare('002') < 0) {
                        document.getElementById("result").innerHTML = '<div class="passed">Уязвимость присутствует<br>Вы можете прошить эту приставку</div>';
                    } else {
                        document.getElementById("result").innerHTML = '<div class="unknown">Нет информации</div>';
                    }
                    break;
                    
                case 'J4':
                    sn = x.value.substring(4, 10);
                    if (sn.localeCompare('008278') == 0) {
                        document.getElementById("result").innerHTML = '<div class="passed">Вероятнее всего, уязвимость присутствует.<br>Вы можете прошить эту приставку</div>';
                    } else if (sn.localeCompare('0083') >= 0) {
                        document.getElementById("result").innerHTML = '<div class="failed">Уязвимость устранена<br>Вы не сможете прошить приставку!<br><br>Однако, если версия системного ПО на консоли 4.1.0, то её можно прошить с помощью <a href="http://switch.customfw.xyz/caffeine">Caffeine</div>';
                    } else if (sn.localeCompare('0048') == 0) {
                        document.getElementById("result").innerHTML = '<div class="passed">Уязвимость вероятнее всего присутствует<br>Вы можете прошить эту приставку</div>';
                    } else if (sn.localeCompare('0046') >= 0) {
                        document.getElementById("result").innerHTML = '<div class="maybe">Уязвимость возможно устранена<br>Если вы собираетесь купить эту консоль, подумайте ещё раз, если же уже купили, просто попробуйте</div><p>Единственный верный способ, который поможет понять прошивается ваша приставка или нет - <a href="http://switch.customfw.xyz/fusee-gelee">попробовать</a>. Если приставка прошиваемая, она запустит переданный ей пейлоад. Если нет, экран останется чёрным, хотя в окне tegrarcmGUI и будет показано, что пейлоад проброшен успешно: <br><br>Значение <strong>0x0000</strong> в логе программы означает, что вашу приставку нельзя прошить с помощью <a href="http://switch.customfw.xyz/fusee-gelee">Fusée Gelée</a><br><br><img src="http://check.customfw.xyz/tegra.png"></p>';
                    } else if (sn.localeCompare('0046') < 0) {
                        document.getElementById("result").innerHTML = '<div class="passed">Уязвимость присутствует<br>Вы можете прошить эту приставку</div>';
                    } else {
                        document.getElementById("result").innerHTML = '<div class="unknown">Нет информации</div>';
                    }
                    break;
                        
                case 'J7':
					sn = x.value.substring(4, 9);
					if (sn.localeCompare('005') >= 0) {
						document.getElementById("result").innerHTML = '<div class="failed">Уязвимость устранена<br>Вы не сможете прошить приставку!<br><br>Однако, если версия системного ПО на консоли 4.1.0, то её можно прошить с помощью <a href="http://switch.customfw.xyz/caffeine">Caffeine</div>';
					} else if (sn.localeCompare('004') >= 0) {
						document.getElementById("result").innerHTML = '<div class="maybe">Уязвимость возможно устранена<br>Если вы собираетесь купить эту консоль, подумайте ещё раз, если же уже купили, просто попробуйте</div><p>Единственный верный способ, который поможет понять прошивается ваша приставка или нет - <a href="http://switch.customfw.xyz/fusee-gelee">попробовать</a>. Если приставка прошиваемая, она запустит переданный ей пейлоад. Если нет, экран останется чёрным, хотя в окне tegrarcmGUI и будет показано, что пейлоад проброшен успешно: <br><br>Значение <strong>0x0000</strong> в логе программы означает, что вашу приставку нельзя прошить с помощью <a href="http://switch.customfw.xyz/fusee-gelee">Fusée Gelée</a><br><br><img src="http://check.customfw.xyz/tegra.png"></p>';
					} else if (sn.localeCompare('004') < 0) {
						document.getElementById("result").innerHTML = '<div class="passed">Уязвимость присутствует<br>Вы можете прошить эту приставку</div>';
					} else {
						document.getElementById("result").innerHTML = '<div class="unknown">Нет информации</div>';
					}
                    break;
                    
                case 'W9':
					document.getElementById("result").innerHTML = '<div class="passed">Скорее всего это восстановленная в Nintendo приставка <br>Как правило, они прошиваются</div>';
                    break;

				case 'K1':
					sn = x.value.substring(4, 10);
					if (sn.localeCompare('0006') >= 0) {
						document.getElementById("result").innerHTML = '<div class="failed">Уязвимость устранена<br>Вы не сможете прошить приставку!<br><br>Однако, если версия системного ПО на консоли 4.1.0, то её можно прошить с помощью <a href="http://switch.customfw.xyz/caffeine">Caffeine</div>';
					} else if (sn.localeCompare('0006') < 0) {
						document.getElementById("result").innerHTML = '<div class="passed">Уязвимость присутствует<br>Вы можете прошить эту приставку</div>';
					} else {
						document.getElementById("result").innerHTML = '<div class="unknown">Нет информации</div>';
					}
                    break;


            }
        }
        else {
            document.getElementById("result").innerHTML = "";
        }
    }