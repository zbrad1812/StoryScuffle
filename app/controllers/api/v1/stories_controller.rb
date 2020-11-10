class Api::V1::StoriesController < ApplicationController
  skip_before_action :verify_authenticity_token, :only => :create
  
  def index
    render json: Story.all
  end

  def show
    story = Story.find(params[:id])
    render json: story
  end

  def create
    story = Story.new(story_params)
    
    if story.save
      render json: story
    else
      render json: { errors: story.errors.full_messages.to_sentence }
    end
  end

  def story_params
    params.permit(:title, :description, :content)
  end

end