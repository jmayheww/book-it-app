module ApiResource
  extend ActiveSupport::Concern

  included do
    def index
      render json: model.all, status: :ok
    end

    def show
      render json: model.find(params[:id]), status: :found
    end

    private

    def model
      raise NotImplementedError, 'Please implement the `model` method in the including controller.'
    end
  end
end
