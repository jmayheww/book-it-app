class RemoveAnotherMissingMigration < ActiveRecord::Migration[6.1]
  def up
    execute "DELETE FROM schema_migrations WHERE version='20230319043731';"
  end
end
