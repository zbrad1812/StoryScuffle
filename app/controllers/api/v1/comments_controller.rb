class Api::V1::CommentsController < ApplicationController
  def index
    render json: Comment.all
  end

  def show
    comments = Comment.where(:story_id => params[:id])
    render json: comments
  end

end