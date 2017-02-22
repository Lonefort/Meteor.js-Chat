import React, {Component, PropTypes} from 'react'
import { browserHistory } from 'react-router'
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
if(Meteor.isServer){
Meteor.methods({
changeUsername(username){
check(username,{
  new_username:String,
})
  if(username.new_username!=""){
    Accounts.setUsername(this.userId,username.new_username);
}
    },
changeEmail(email){
  check(email,{
    new_email:String,
    conf_new_email:String,
  })
  let user = Meteor.user();
  let old_email = user.emails;
  if(old_email != null){
    Accounts.removeEmail(user._id, user.emails[0].address)
  }
        if(email.new_email === email.conf_new_email && email.new_email !== "" && email.conf_new_email !== ""){
    Accounts.addEmail(this.userId, email.new_email)
      }
},
changePswd(password){
  check(password,{
    new_password : String,
    conf_new_password : String,
  })
  if (password.new_password === password.conf_new_password && password.new_password !== "" && password.conf_new_password !== ""){
    Accounts.setPassword(this.userId, password.new_password)
  }
}
});

}
