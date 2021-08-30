# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
class BlogPostsController < ApplicationController
  def index
    # ---2)
    @posts = BlogPost.all
    # creation part of the blogpost.
  end
  

  def show
    # ---3)
    @post = BlogPost.find(params[:id])
  end
 #finds a specific blog post by id
  # ---4)
  def new
    @post = Post.new
  end
  # this allows for the creation of a new blog post.

  def create
    # ---5)
    #calls the creation of blog post via create, and checks to make sure the blog post itself is valid with the (blog_post_params)
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)
  def edit
    @post = BlogPost.find(params[:id])
    # this again find a blog post based on its ID, to be edited
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # first finds the blog post via ID, then updates it while then checking if the post is valid via blog post params
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      #this finds based on ID then calls on the destroy to delete the specific blog post, if theres no path then the else calls to do nothing
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  private
  def blog_post_params
    # ---10)
    #this checks the params of the blog post to only except a title and content to ensure security of the program.
    params.require(:blog_post).permit(:title, :content)
  end
end
