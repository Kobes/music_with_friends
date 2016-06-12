ExUnit.start

Mix.Task.run "ecto.create", ~w(-r Music.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r Music.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(Music.Repo)

