import fb from "../../../utils/Firebase";

const data = [];
const friends_list = [];
fb.auth().onAuthStateChanged((credentials) => {
    if (credentials) {
        fb.firestore()
            .collection("Users")
            .where("uid", "==", credentials.uid)
            .onSnapshot((query) => {
                query.forEach((docs) => {
                    data.push(docs.data());
                    console.log(docs.data())
                    friends_list.push(data)
                });
            });

    }
});;

friends_list.map(({...doc }) => (
    [...doc["friends"]].map(({ dateAdded, uid }) => {
        console.log(uid)
        fb.firestore()
            .collection("Users")
            .where("uid", "==", uid)
            .onSnapshot((friends) => {
                friends.forEach((friend) => {
                    console.log(friend)
                })
            })
    })
))


export { friends_list, data };