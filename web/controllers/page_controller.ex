defmodule Music.PageController do
  use Music.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
