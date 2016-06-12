defmodule Music.PlayChannel do
	use Phoenix.Channel

	def join("play:sounds", _message, socket) do
		{:ok, socket}
	end
end