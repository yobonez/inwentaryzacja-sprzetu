class UserModel {
    constructor(id, username, password, first_name, last_name, email, phone, role) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone = phone;
        this.role = role; 
    }

    static fromRow(row) {
        return new UserModel(row.id
                           , row.username
                           , row.password
                           , row.first_name
                           , row.last_name
                           , row.email
                           , row.phone
                           , row.role);
    }
}

module.exports = UserModel;