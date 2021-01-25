class AlbumsController < ApplicationController

    def index
        @albums = Album.all 
        render json: @albums, include: :genre
    end

    def show
        @album = Album.find(params[:id])
        render json: @album, include: :genre
    end

    def create
        @new_album = Album.create(
            title: params[:title],
            artist: params[:artist],
            genre_id: params[:genre_id]
        )
        render json: @new_album
    end
    
end
