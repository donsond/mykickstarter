class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params);
        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: [@user.errors.full_messages], status: 403
        end
    end

    def show
        @user = User.find(params[:id]);
    end
    
    private
    def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation, :email_confirmation)
    end

end
