class Api::V1::CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token, :only => :create

  def index
    render json: Comment.all
  end

  def show
    comments = Comment.where(:story_id => params[:id])
    render json: comments
  end

  def create
    
    comment = Comment.create!(commentContent: params[:commentContent], story_id: params[:story_id])
    
    if comment.save
      render json: comment
    else
      render json: { errors: comment.errors.full_messages.to_sentence }
    end
  end

end