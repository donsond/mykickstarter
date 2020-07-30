class Api::ProjectsController < ApplicationController
    def create
        @project = Project.new(project_params)
        if @project.save
            render "api/projects/show"
        else
            render json: [@project.errors.full_messages], status: 403
        end
    end

    def show
        @project = Project.find(params[:id])
        @user = User.find(@project.creator_id)
    end

    def index
        @projects = Project.all
    end

    def destroy

    end
    
    private
    def project_params
        params.require(:project).permit(:title, :category, :creator_id, :funding_required, :FAQs, :campaign_end_date)
    end
end
