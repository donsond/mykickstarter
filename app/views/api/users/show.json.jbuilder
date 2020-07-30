# json.extract! @user, :id, :name, :email
json.partial! 'api/users/user', user: @user
