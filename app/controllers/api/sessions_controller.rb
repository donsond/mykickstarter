class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login(@user)
            render "api/users/show"
        else
            render json: [["Invalid Email/ Password"]], status: 401
        end

    end

    def destroy
        @user = current_user
        if logged_in?
            logout!
            render "api/users/show" 
        else
            render json: [["No Current User"]]
        end

    end

end
