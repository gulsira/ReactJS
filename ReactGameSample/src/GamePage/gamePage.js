import React from 'react';
import FlatList from 'flatlist-react';
import { v4 as uuidv4 } from 'uuid';

import './gamePage.css';

export default class GamePage extends React.Component {

    state = {
        numberToGuess: undefined,
        currentGuess: 0,
        pastGuesses: [],
        strRes: [],
        buttonDisable: true
    }

    componentDidMount() {
        const numberToGuess = generateRandomNumber();
        this.setState({ numberToGuess });
    }

    render() {

        console.log(this.state.numberToGuess);
        const onTextChange = (e) => {
            const control = /^[0-9\b]+$/;
            if (e.target.value === '' || control.test(e.target.value)) {
                this.setState({ currentGuess: e.target.value })
            } else {
                alert("Yalnızca sayısal değer girebilirsiniz!")
                e.target.value = "";
            }
        }

        const saveGuesses = () => {
            if (this.state.currentGuess !== '' && this.state.currentGuess !== undefined && !this.state.pastGuesses.includes(this.state.currentGuess)) {
                this.setState({ pastGuesses: this.state.pastGuesses.concat(this.state.currentGuess), currentGuess: '' });
                if (this.state.numberToGuess == this.state.currentGuess) {
                    alert("Tebrikler, Sayıyı Doğru Tahmin Ettiniz.");
                    window.location.reload(true);
                    resetGame();
                }
                document.getElementById("input").value = "";
            }
        }

        const resetGame = () => {
            this.setState({
                numberToGuess: generateRandomNumber(),
                currentGuess: 0,
                pastGuesses: [],
                strRes: []
            })
            document.getElementById("input").value = "";
        }


        var strResult = '';
        const checkDigit = async () => {
            await saveGuesses();
            const numberToCheck = [];

            for (let i = 0; i < 4; i++) {
                numberToCheck.push(String(this.state.pastGuesses.slice(-1)[0][i]));
            }

            for (let i = 0; i < 4; i++) {
                if (check(numberToCheck[i])) {
                    if (numberToCheck[i] === String(this.state.numberToGuess).charAt(i)) {
                        strResult = strResult + '+';
                    } else {
                        strResult = strResult + '-';
                    }
                }
            }
            if (strResult === '') {
                strResult = 'X'
            }
            if (!this.state.pastGuesses.includes(this.state.currentGuess)) {
                this.setState({ strRes: this.state.strRes.concat(strResult) })
            }
        }


        const check = (digit) => {
            const number = [];
            for (let i = 0; i < 4; i++) {
                number.push(String(this.state.numberToGuess).slice()[i])
            }
            for (let i = 0; i < 4; i++) {
                if (number[i] === digit) {
                    return true;
                }
            }
            return false;
        }

        const renderGuess = (guess) => {
            return (
                < li key={guess + uuidv4()} >
                    {guess}
                </li >
            )
        }


        return (

            <div className="background" >
                <div className="border" >
                    <div style={{ width: '80%' }} >
                        <h1 style={{ textAlign: 'center', fontFamily: 'Blippo, fantasy' }} className="text" >SAYI TAHMİN OYUNU</h1>
                        <h3 className="text" >Tahmininiz: </h3>
                        <input style={{ width: '88%' }} id="input" placeholder="Dört Basamaklı Tahmininizi giriniz." onChange={onTextChange} />
                        <button
                            disabled={this.state.currentGuess.length === 4 ? false : true}
                            onClick={checkDigit}
                            style={{ borderRadius: '2px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }} >OK</button>
                        <h3 className="text" >Önceki Tahminleriniz: </h3>
                        <div style={{ display: 'flex' }} >
                            <div className="flatlist">
                                <FlatList
                                    list={this.state.pastGuesses}
                                    renderItem={renderGuess}
                                    renderWhenEmpty={() => <div className="text" >Henüz tahmin yapılmadı!</div>}
                                />
                            </div>
                            <div className="flatlist">
                                <FlatList
                                    list={this.state.strRes}
                                    renderItem={renderGuess}
                                    renderWhenEmpty={() => <div className="text" ></div>}
                                />
                            </div>
                        </div>
                        <button className="button" onClick={resetGame} >YENİ OYUN</button>
                    </div>
                </div>
            </div>
        )
    }
}

function generateRandomNumber() {
    var digits = "123456789".split(''),
        first = shuffle(digits).pop();
    digits.push('0');
    var returnedValue = parseInt(first + shuffle(digits).join('').substring(0, 3), 10);
    return returnedValue;
}

const shuffle = (o) => {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}