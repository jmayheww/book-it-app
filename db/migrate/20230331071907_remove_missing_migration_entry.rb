class RemoveMissingMigrationEntry < ActiveRecord::Migration[6.1]
  def up
    execute "DELETE FROM schema_migrations WHERE version='20230331070853';"
  end
end
