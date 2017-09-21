/**
 * Created by tommyacton on 03/07/2017.
 */

var myFriends  = ["Eman", "Panashe", "Jacob", "Ohleen", "Dad", "Mum", "Anesu", "Samy", "Gabby", "Nigel", "Chibz", "Emamn Henry", "Elisheba"];

function greatFriends(){
    for (var i in myFriends) {
        console.log("Hello " + myFriends.sort()[i] + " From Thomas Acton" + '\n' );
    }
}

greatFriends();