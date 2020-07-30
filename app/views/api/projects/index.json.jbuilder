@projects.each do |project|
    json.set! project.id do
        json.extract! project, :id, :title, :body, :video_url
    end
end

# json.partial! 'api/projects/project', project: @project

