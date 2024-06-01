let tog = 1
let rollingSound = new Audio('rpg-dice-rolling-95182.mp3')
let winSound = new Audio('winharpsichord-39642.mp3')
let redback = false
let yellowback = false


let p1sum = 1
let p2sum = 1


function play(player, psum, correction, num) {
    let sum
    if (psum == 'p1sum') {
        
        p1sum = p1sum + num
        p1sum = p1sum < 1 ? 1 : p1sum;

        if (p1sum == 4) {
            p1sum = 17
        }
        if (p1sum == 9) {
            p1sum = 12
        }
        if (p1sum == 15) {
            p1sum = 35
        }
        if (p1sum == 20) {
            p1sum = 18
        }
        if (p1sum == 31) {
            p1sum = 28
        }
        if (p1sum == 36) {
            p1sum = 22
        }
        if (p1sum == 38) {
            p1sum = 43
        }
        if (p1sum == 40) {
            p1sum = 41
        }
        if (p1sum == 47) {
            p1sum = 44
        }
        if (p1sum == 50) {
            p1sum = 51
        }
        if (p1sum == 54) {
            p1sum = 49
        }
        if (p1sum == 64) {
            p1sum = 60
        }
        if (p1sum == 67) {
            p1sum = 74
        }
        if (p1sum == 73) {
            p1sum = 93
        }
        if (p1sum == 79) {
            p1sum = 82
        }
        if (p1sum == 80) {
            p1sum = 62
        }
        if (p1sum == 84) {
            p1sum = 97
        }
        if (p1sum == 95) {
            p1sum = 93
        }
        if (p1sum == 99) {
            p1sum = 81
        }
        // if (p1sum > 100) { 
        //     p1sum = 100 - (p1sum - 100)
        // }


        sum = p1sum



    }

    if (psum == 'p2sum') {
        
        p2sum = p2sum + num
        p2sum = p2sum < 1 ? 1 : p2sum;

        if (p2sum == 4) {
            p2sum = 17
        }
        if (p2sum == 9) {
            p2sum = 12
        }
        if (p2sum == 15) {
            p2sum = 35
        }
        if (p2sum == 20) {
            p2sum = 18
        }
        if (p2sum == 31) {
            p2sum = 28
        }
        if (p2sum == 36) {
            p2sum = 22
        }
        if (p2sum == 38) {
            p2sum = 43
        }
        if (p2sum == 40) {
            p2sum = 41
        }
        if (p2sum == 47) {
            p2sum = 44
        }
        if (p2sum == 50) {
            p2sum = 51
        }
        if (p2sum == 54) {
            p2sum = 49
        }
        if (p2sum == 64) {
            p2sum = 60
        }
        if (p2sum == 67) {
            p2sum = 74
        }
        if (p2sum == 73) {
            p2sum = 93
        }
        if (p2sum == 79) {
            p2sum = 82
        }
        if (p2sum == 80) {
            p2sum = 62
        }
        if (p2sum == 84) {
            p2sum = 97
        }
        if (p2sum == 95) {
            p2sum = 93
        }
        if (p2sum == 99) {
            p2sum = 81
        }
        // if (p2sum > 100) { 
        //     p2sum = 100 - (p2sum - 100)
        // }

        sum = p2sum



    }


    function move() {
        document.getElementById(`${player}`).style.transition = `linear all .5s`





        if (sum < 10) {

            document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
            document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`


        }

        else if (sum == 100) {
            winSound.play()
            if (player == 'p1') {
                alert("Red Won !!")
            }
            else if (player == 'p2') {
                alert("Yellow Won !!")
            }
            location.reload()
        }

        else {

            numarr = Array.from(String(sum))
            n1 = eval(numarr.shift())
            n2 = eval(numarr.pop())
            // console.log(n1, n2)

            if (n1 % 2 != 0) {

                if (n2 == 0) {
                    document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                    document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
                }
                else {
                    document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                    document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`

                }

            }
            else if (n1 % 2 == 0) {
                if (n2 == 0) {

                    document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                    document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
                }
                else {

                    document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                    document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
                }

            }
        }
    }

    move()
    // Fungsi untuk menampilkan kartu saat tombol "Berikan Pertanyaan" ditekan
    if (p1sum == 2 || p1sum == 5 || p1sum == 8 || p1sum == 12 || p1sum == 14 || p1sum == 18 || p1sum == 21 || p1sum == 22 || p1sum == 25 || p1sum == 28 || p1sum == 30 || p1sum == 33 || p1sum == 35 || p1sum == 42 || p1sum == 43 || p1sum == 45 || p1sum == 52 || p1sum == 55 || p1sum == 61 || p1sum == 62 || p1sum == 65 || p1sum == 68 || p1sum == 71 || p1sum == 74 || p1sum == 76 || p1sum == 81 || p1sum == 82 || p1sum == 85 || p1sum == 86 || p1sum == 89 || p1sum == 91 || p1sum == 93 || p1sum == 96 || p1sum == 98) {
        // Mengambil pertanyaan dari file pertanyaan.txt
        fetch('pertanyaan.txt')
        .then(response => response.text())
        .then(data => {
            const questions = data.split('\n').filter(question => question.trim() !== ''); // Memisahkan setiap pertanyaan menjadi array dan menghapus baris kosong
            const randomIndex = Math.floor(Math.random() * questions.length); // Mendapatkan indeks acak untuk pertanyaan
            const randomQuestion = questions[randomIndex]; // Memilih pertanyaan secara acak
            document.getElementById("pertanyaanIsi").textContent = randomQuestion; // Menampilkan isi pertanyaan
            document.getElementById("kartu").style.display = "block";
        })
        .catch(error => {
            console.error('Terjadi kesalahan:', error);
        });

        // Fungsi untuk menangani ketika tombol "Benar" diklik
        document.getElementById("btnBenar").addEventListener("click", function() {
            document.getElementById("kartu").style.display = "none"; // Menyembunyikan kartu setelah tombol diklik
            // Tambahkan kode lain yang ingin Anda jalankan saat tombol "Benar" diklik
        });
        
        // Fungsi untuk menangani ketika tombol "Salah" diklik
        document.getElementById("btnSalah").addEventListener("click", function() {
            document.getElementById("kartu").style.display = "none"; // Menyembunyikan kartu setelah tombol diklik
            // Tambahkan kode lain yang ingin Anda jalankan saat tombol "Salah" diklik
            redback = true
            yellowback = false
            document.getElementById('giliran').innerText = "Move Back!!"
        });
        
    }
    else if (p2sum == 2 || p2sum == 5 || p2sum == 8 || p2sum == 12 || p2sum == 14 || p2sum == 18 || p2sum == 21 || p2sum == 22 || p2sum == 25 || p2sum == 28 || p2sum == 30 || p2sum == 33 || p2sum == 35 || p2sum == 42 || p2sum == 43 || p2sum == 45 || p2sum == 52 || p2sum == 55 || p2sum == 61 || p2sum == 62 || p2sum == 65 || p2sum == 68 || p2sum == 71 || p2sum == 74 || p2sum == 76 || p2sum == 81 || p2sum == 82 || p2sum == 85 || p2sum == 86 || p2sum == 89 || p2sum == 91 || p2sum == 93 || p2sum == 96 || p2sum == 98) {
        // Mengambil pertanyaan dari file pertanyaan.txt
        fetch('pertanyaan.txt')
        .then(response => response.text())
        .then(data => {
            const questions = data.split('\n').filter(question => question.trim() !== ''); // Memisahkan setiap pertanyaan menjadi array dan menghapus baris kosong
            const randomIndex = Math.floor(Math.random() * questions.length); // Mendapatkan indeks acak untuk pertanyaan
            const randomQuestion = questions[randomIndex]; // Memilih pertanyaan secara acak
            document.getElementById("pertanyaanIsi").textContent = randomQuestion; // Menampilkan isi pertanyaan
            document.getElementById("kartu").style.display = "block";
        })
        .catch(error => {
            console.error('Terjadi kesalahan:', error);
        });

        // Fungsi untuk menangani ketika tombol "Benar" diklik
        document.getElementById("btnBenar").addEventListener("click", function() {
            document.getElementById("kartu").style.display = "none"; // Menyembunyikan kartu setelah tombol diklik
            // Tambahkan kode lain yang ingin Anda jalankan saat tombol "Benar" diklik
        });
        
        // Fungsi untuk menangani ketika tombol "Salah" diklik
        document.getElementById("btnSalah").addEventListener("click", function() {
            document.getElementById("kartu").style.display = "none"; // Menyembunyikan kartu setelah tombol diklik
            // Tambahkan kode lain yang ingin Anda jalankan saat tombol "Salah" diklik
            yellowback = true
            redback = false
            document.getElementById('giliran').innerText = "Move Back!!"
        });

    }
}

let images = ["dice-01.svg",
"dice-02.svg",
"dice-03.svg",
"dice-04.svg",
"dice-05.svg",
"dice-06.svg"];
let dice = document.querySelectorAll("img.dadu");

function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        rollingSound.play()
        let dieOneValue = Math.floor(Math.random()*6);
        let dieTwoValue = Math.floor(Math.random()*6);
        console.log(dieOneValue,dieTwoValue);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#total").innerHTML = "Your roll is " + ( (dieOneValue +1) + (dieTwoValue + 1) );
        num = ( (dieOneValue +1) + (dieTwoValue + 1) )
        console.log("Redback: ", redback)  
        console.log("Yellowback: ", yellowback)

        if (redback == true) {
            play('p1', 'p1sum', 0, (num*-1))
            redback = false
            document.getElementById('giliran').innerText = "Next is Yellow's Turn"
        } else if (yellowback == true) {
            play('p2', 'p2sum', 55, (num*-1))
            yellowback = false
            document.getElementById('giliran').innerText = "Next is Red's Turn"
        } else {
            if (tog % 2 != 0) {
                document.getElementById('giliran').innerText = "Next is Yellow's Turn"
                play('p1', 'p1sum', 0, num)
            }
        
            else if (tog % 2 == 0) {
                document.getElementById('giliran').innerText = "Next is Red's Turn"
                play('p2', 'p2sum', 55, num)
            }
    
            if (num != 12) {
                tog = tog + 1
            } else {
                document.getElementById('giliran').innerText = "Dice Rolled Again !!"
                tog = tog
            }
        }
        
    },
    1000
    );
}

// document.getElementById("diceBtn").addEventListener("click", function () {
//     rollingSound.play()
//     num = Math.floor(Math.random() * (6 - 1 + 1) + 1)
//     document.getElementById("dice").innerText = num


//     if (tog % 2 != 0) {
//         document.getElementById('tog').innerText = "Yellow's Turn : "
//         play('p1', 'p1sum', 0, num)

//     }

//     else if (tog % 2 == 0) {
//         document.getElementById('tog').innerText = "Red's Turn : "

//         play('p2', 'p2sum', 55, num)

//     }

//     tog = tog + 1




// })