source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.3.6'

gem 'rails', '~> 6.1.6'
gem 'puma', '~> 5.0'
gem 'webpacker', '~> 5.0'
gem 'bootsnap', '>= 1.4.4', require: false
gem 'meta-tags'
gem 'annotate'
gem 'rails-i18n'
gem 'activerecord-import'
gem 'seed-fu'
gem 'mechanize'
gem 'whenever', require: false

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'sqlite3', '~> 1.4'
  #Test
  gem 'factory_bot_rails'
  gem 'rspec-rails'
  gem 'rubyzip', '2.3.0'
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 4.1.0'
  # Display performance information such as SQL time and flame graphs for each request in your browser.
  # Can be configured to work on production as well see: https://github.com/MiniProfiler/rack-mini-profiler/blob/master/README.md
  gem 'rack-mini-profiler', '~> 2.0'
  gem 'listen', '~> 3.3'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'rubocop', require: false
  gem 'rubocop-rails', require: false
  gem 'rubocop-checkstyle_formatter', require: false
  gem 'bullet'
end

group :test do
  gem 'capybara'
  gem 'webdrivers'
end

group :production do
  gem 'pg'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

#net/smtpが見つからないエラーを回避するため
gem 'net-smtp'
gem 'net-imap'
gem 'net-pop'

# Ruby 3.3でbundled gemに分離されたため明示的に追加
gem 'logger'
