class User {
    constructor (id, nickName, email, password, posts) {
        this.id = id;
        this.nickName = nickName;
        this.email = email;
        this.password = password;
        this.posts = posts;
    }
};

export default User;